import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_EJ_CHARTOREPLACE', {schema: 'dbo' } )
export class T_EJ_CHARTOREPLACE {

    @Column('smallint', {
        nullable: false,
        primary: true,
        name: 'EJC_WRONGCHAR_N',
        })
    public EJC_WRONGCHAR_N: number;

    @Column('smallint', {
        nullable: false,
        name: 'EJC_RIGHTCHAR_N',
        })
    public EJC_RIGHTCHAR_N: number;

    @Column('varchar', {
        nullable: true,
        length: 75,
        name: 'EJC_COMMENT_C',
        })
    public EJC_COMMENT_C: string | null;

}
