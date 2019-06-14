import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_FOLDERANALYSE_GROUP_TYPE', {schema: 'dbo' } )
export class T_FOLDERANALYSE_GROUP_TYPE {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 2,
        name: 'FGT_GROUP_C',
        })
    public FGT_GROUP_C: string;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'FGT_ACTIVITY_N',
        })
    public FGT_ACTIVITY_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 8,
        name: 'FGT_FOLDERTYPE_C',
        })
    public FGT_FOLDERTYPE_C: string;

}
