import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_PRNDF', {schema: 'dbo' } )
export class T_PRNDF {

    @PrimaryGeneratedColumn({
        type: 'numeric',
        // precision:9,
        // scale:0,
        name: 'PRH_ID_N',
        })
    public PRH_ID_N: number;

    @Column('datetime', {
        nullable: true,
        name: 'PRH_START_DAT',
        })
    public PRH_START_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'PRH_END_DAT',
        })
    public PRH_END_DAT: Date | null;

    @Column('int', {
        nullable: true,
        name: 'PRH_ARTICLES_N',
        })
    public PRH_ARTICLES_N: number | null;

}
