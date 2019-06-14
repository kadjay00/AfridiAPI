import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_BALANCE_CLEANCHAR', {schema: 'dbo' } )
export class T_BALANCE_CLEANCHAR {

    @PrimaryGeneratedColumn({
        type: 'numeric',
        // scale:0,
        name: 'BCC_ID_N',
        })
    public BCC_ID_N: number;

    @Column('int', {
        nullable: false,
        name: 'BCC_LEVEL_C',
        })
    public BCC_LEVEL_C: number;

    @Column('varchar', {
        nullable: false,
        length: 10,
        name: 'BCC_CHAR_C',
        })
    public BCC_CHAR_C: string;

    @Column('varchar', {
        nullable: false,
        length: 10,
        name: 'BCC_REPLACEWITH_C',
        })
    public BCC_REPLACEWITH_C: string;

}
