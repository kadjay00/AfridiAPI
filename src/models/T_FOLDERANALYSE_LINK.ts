import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_FOLDERANALYSE_LINK', {schema: 'dbo' } )
export class T_FOLDERANALYSE_LINK {

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'FLK_FOLDERLINK_C',
        })
    public FLK_FOLDERLINK_C: string;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'FLK_DESCRIPNED_C',
        })
    public FLK_DESCRIPNED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'FLK_DESCRIPFRA_C',
        })
    public FLK_DESCRIPFRA_C: string | null;

}
