import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_SELECTIONDETAIL', {schema: 'dbo' } )
@Index('IX_SELECTIONDETAIL_PKINDEX', ['DSL_SELECTIONID_N', 'DSL_DETAILID_N'], {unique: true})
export class T_SELECTIONDETAIL {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'DSL_SELECTIONID_N',
        })
    public DSL_SELECTIONID_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'DSL_DETAILID_N',
        })
    public DSL_DETAILID_N: number;

}
